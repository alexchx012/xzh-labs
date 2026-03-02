import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export interface ProjectItem {
  titleCn: string;
  titleEn: string;
  descCn: string;
  descEn: string;
  tags: string[];
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
          <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <span className="text-5xl">🚀</span>
          </div>

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
              {t(item.descCn, item.descEn)}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
