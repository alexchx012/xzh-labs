import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ImageCarousel, { type CarouselImage } from './ImageCarousel';

export interface ProjectItem {
  titleCn: string;
  titleEn: string;
  /** 卡片表面的简短介绍（约3行） */
  summaryCn: string;
  summaryEn: string;
  /** 弹框中的详细描述（约300字），未填写时回退到 summary */
  detailCn?: string;
  detailEn?: string;
  tags: string[];
  /** 项目截图/图片路径数组，支持字符串或 { src, fit } 配置 */
  images?: CarouselImage[];
}

interface Props {
  item: ProjectItem | null;
  onClose: () => void;
}

const ProjectModal = ({ item, onClose }: Props) => {
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
          <ImageCarousel images={item.images ?? []} />

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
            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
              {t(item.detailCn ?? item.summaryCn, item.detailEn ?? item.summaryEn)}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
