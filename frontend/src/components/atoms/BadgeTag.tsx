import { BadgeTagProps } from '../../interfaces/atoms';

function BadgeTag({ icon, text }: BadgeTagProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
      {icon}
      <span className="text-sm text-white font-medium">
        {text}
      </span>
    </div>
  );
}

export default BadgeTag;
