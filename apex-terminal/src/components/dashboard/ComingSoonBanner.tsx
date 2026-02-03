import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Construction } from 'lucide-react';

interface ComingSoonBannerProps {
    title: string;
    description: string;
    eta?: string;
    className?: string;
}

export function ComingSoonBanner({ title, description, eta, className }: ComingSoonBannerProps) {
    return (
        <Card className={cn("border-dashed bg-card/50", className)}>
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center mb-4">
                    <Construction className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground max-w-md mb-4">{description}</p>
                {eta && (
                    <Badge variant="outline" className="bg-background text-xs">
                        Target Release: {eta}
                    </Badge>
                )}
            </CardContent>
        </Card>
    );
}
