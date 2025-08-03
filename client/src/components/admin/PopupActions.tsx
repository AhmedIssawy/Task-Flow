'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Edit, Trash2 } from 'lucide-react';

interface PopupActionsProps<T> {
    item: T;
    enableEdit?: boolean;
    enableDelete?: boolean;
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
}

export function PopupActions<T>({
    item,
    enableEdit = false,
    enableDelete = false,
    onEdit,
    onDelete,
}: PopupActionsProps<T>) {
    const handleEdit = () => {
        if (onEdit) {
            onEdit(item);
        }
    };

    const handleDelete = () => {
        if (onDelete) {
            onDelete(item);
        }
    };

    // Don't render if no actions are available
    if (!enableEdit && !enableDelete) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-muted/50 rounded-lg"
                >
                    <MoreHorizontal className="w-4 h-4" />
                    <span className="sr-only">Open actions menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="w-40 backdrop-blur-xl bg-background/95 border border-border/30 shadow-2xl rounded-xl"
            >
                {enableEdit && onEdit && (
                    <DropdownMenuItem
                        onClick={handleEdit}
                        className="flex items-center space-x-2 px-3 py-2 hover:bg-primary/10 hover:text-primary rounded-lg cursor-pointer"
                    >
                        <Edit className="w-4 h-4" />
                        <span>Edit</span>
                    </DropdownMenuItem>
                )}
                {enableDelete && onDelete && (
                    <DropdownMenuItem
                        onClick={handleDelete}
                        className="flex items-center space-x-2 px-3 py-2 hover:bg-destructive/10 hover:text-destructive rounded-lg cursor-pointer"
                    >
                        <Trash2 className="w-4 h-4" />
                        <span>Delete</span>
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}