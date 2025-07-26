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
      <AlertDialogContent className="backdrop-blur-xl bg-background/95 border border-border/30 text-foreground shadow-2xl shadow-destructive/10 sm:max-w-md rounded-2xl p-6">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-orange-500/5 rounded-2xl pointer-events-none" />
        
        <AlertDialogHeader className="relative space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <AlertDialogTitle className="text-lg font-semibold">Confirm Deletion</AlertDialogTitle>
            </div>
          </div>
          <AlertDialogDescription className="text-sm text-muted-foreground leading-relaxed">
            This will permanently delete{' '}
            <span className="font-medium text-destructive bg-destructive/10 px-2 py-1 rounded-md">
              {item?.name ?? 'this item'}
            </span>{' '}
            and cannot be undone. This action is irreversible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="relative flex space-x-3 pt-6">
          <AlertDialogCancel
            className="flex-1 bg-muted/50 hover:bg-muted/80 border-border/30 rounded-xl py-3 transition-all duration-200"
            disabled={isLoading}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="flex-1 bg-gradient-to-r from-destructive to-red-600 hover:from-destructive/90 hover:to-red-700 text-white shadow-lg hover:shadow-xl rounded-xl py-3 transition-all duration-200"
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Deleting...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Delete</span>
              </div>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
