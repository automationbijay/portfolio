import { useMemo } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { DonutChart } from '../ui/DonutChart';

const CHART_COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f97316', '#10b981', '#64748b'];

export function AllocationChart() {
    const { state: { holdings, portfolioSummary } } = usePortfolio();

    const { chartData, finalData } = useMemo(() => {
        // ⚡ Bolt: Memoize expensive array sorting and reducing operations
        // to prevent recalculation on every Dashboard re-render.
        // Impact: Reduces CPU cycles when context updates but holdings haven't changed.
        const sortedData = [...holdings].sort((a, b) => b.currentValue - a.currentValue);
        const mainAssets = sortedData.slice(0, 5);
        const othersValue = sortedData.slice(5).reduce((sum, item) => sum + item.currentValue, 0);

        return {
            chartData: sortedData,
            finalData: othersValue > 0
                ? [...mainAssets, { scrip: 'Others', currentValue: othersValue }]
                : mainAssets
        };
    }, [holdings]);

    return (
        <Card className="h-full overflow-hidden border-none bg-gradient-to-br from-primary/5 via-card to-background shadow-xl relative group">
            <div className="absolute inset-0 bg-primary/5 opacity-50 pointer-events-none" />
            <CardHeader className="p-5 border-b border-border/40 bg-muted/20">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground opacity-80">Asset Allocation</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <DonutChart
                    data={finalData}
                    dataKey="currentValue"
                    nameKey="scrip"
                    colors={CHART_COLORS}
                    centerLabel="Total Value"
                    centerValue={portfolioSummary.value}
                    detailedData={chartData}
                />
            </CardContent>
        </Card>
    );
}
