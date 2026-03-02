import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ImageCarousel from './ImageCarousel';
import type { PortfolioItem } from './PortfolioSection';

interface Props {
  item: PortfolioItem | null;
  onClose: () => void;
}

const PortfolioModal = ({ item, onClose }: Props) => {
  const { t } = useLanguage();

  if (!item) return null;

  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="glass-strong border-none max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            {t(item.titleCn, item.titleEn)}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {t(item.periodCn, item.periodEn)}
          </p>

          {/* Image carousel */}
          <ImageCarousel
            images={item.images.map((src) => ({ src, fit: 'contain' as const }))}
            interval={5000}
          />

          <div>
            <h4 className="font-semibold mb-2 text-foreground">
              {t('技术栈', 'Tech Stack')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-foreground">
              {t('项目描述', 'Description')}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(item.detailDescCn, item.detailDescEn)}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal;
