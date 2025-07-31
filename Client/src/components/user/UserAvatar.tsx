import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface UserAvatarContentProps {
     name: string | null;
     onClick?: ()=> void;
}

export default function UserAvatar({ name, onClick }: UserAvatarContentProps) {
  return (
    <Avatar className="h-10 w-10 ring-2 ring-primary/20 rounded-2xl cursor-pointer" onClick={onClick}>
      <AvatarFallback className="bg-primary text-primary-foreground font-medium rounded-2xl font-primary">
        {name
          ?.split(' ')
          .map((name) => name[0])
          .join('')}
      </AvatarFallback>
    </Avatar>
  );
}
