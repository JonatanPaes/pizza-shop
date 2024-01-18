import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 562 },
  { date: '12/12', revenue: 1652 },
  { date: '13/12', revenue: 320 },
  { date: '14/12', revenue: 656 },
  { date: '15/12', revenue: 1663 },
  { date: '16/12', revenue: 2546 },
  { date: '17/12', revenue: 2663 },
  { date: '18/12', revenue: 963 },
  { date: '19/12', revenue: 784 },
  { date: '20/12', revenue: 3952 },
  { date: '21/12', revenue: 1560 },
  { date: '22/12', revenue: 777 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              stroke={colors.violet[500]}
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
