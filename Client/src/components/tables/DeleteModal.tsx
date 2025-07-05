import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface DeleteModalProps {
  item: any;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
}

export default function DeleteModal({
  item,
  onClose,
  onConfirm,
  isLoading,
}: DeleteModalProps) {
  return (
    <AlertDialog open={!!item} onOpenChange={onClose}>
      <AlertDialogContent className="bg-black border border-border text-foreground shadow-xl sm:max-w-md rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete{' '}
            <span className="font-medium text-destructive">
              {item?.name ?? 'this item'}
            </span>{' '}
            and cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="bg-muted hover:bg-muted/80"
            disabled={isLoading}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-white hover:bg-destructive/90"
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
