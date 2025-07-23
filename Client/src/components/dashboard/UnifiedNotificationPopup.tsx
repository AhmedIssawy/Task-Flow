'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import {
  Bell,
  CheckCircle,
  Clock,
  FileText,
  GraduationCap,
  Calendar,
  AlertTriangle,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslations } from 'next-intl';

// TODO: Replace with API types when implementing backend integration
interface Notification {
  id: string;
  type: 'assignment' | 'grade' | 'event' | 'system' | 'reminder';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  priority: 'low' | 'medium' | 'high';
  actionUrl?: string;
}

const getNotificationIcon = (type: Notification['type']) => {
  const iconMap = {
    assignment: FileText,
    grade: GraduationCap,
    event: Calendar,
    system: AlertTriangle,
    reminder: Clock
  };
  return iconMap[type];
};

const getNotificationColors = (type: Notification['type']) => {
  const colorMap = {
    assignment: {
      bg: 'bg-blue-50 dark:bg-blue-500/10',
      border: 'border-blue-200 dark:border-blue-500/30',
      iconBg: 'bg-blue-100 dark:bg-blue-500/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      shadow: 'shadow-blue-500/20'
    },
    grade: {
      bg: 'bg-emerald-50 dark:bg-emerald-500/10',
      border: 'border-emerald-200 dark:border-emerald-500/30',
      iconBg: 'bg-emerald-100 dark:bg-emerald-500/20',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      shadow: 'shadow-emerald-500/20'
    },
    event: {
      bg: 'bg-purple-50 dark:bg-purple-500/10',
      border: 'border-purple-200 dark:border-purple-500/30',
      iconBg: 'bg-purple-100 dark:bg-purple-500/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
      shadow: 'shadow-purple-500/20'
    },
    system: {
      bg: 'bg-orange-50 dark:bg-orange-500/10',
      border: 'border-orange-200 dark:border-orange-500/30',
      iconBg: 'bg-orange-100 dark:bg-orange-500/20',
      iconColor: 'text-orange-600 dark:text-orange-400',
      shadow: 'shadow-orange-500/20'
    },
    reminder: {
      bg: 'bg-amber-50 dark:bg-amber-500/10',
      border: 'border-amber-200 dark:border-amber-500/30',
      iconBg: 'bg-amber-100 dark:bg-amber-500/20',
      iconColor: 'text-amber-600 dark:text-amber-400',
      shadow: 'shadow-amber-500/20'
    }
  };

  return colorMap[type];
};

const formatTimestamp = (timestamp: string, t: (key: string) => string, isRTL: boolean) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInHours = Math.abs(now.getTime() - date.getTime()) / (1000 * 60 * 60);

  if (diffInHours < 1) {
    const minutes = Math.floor(diffInHours * 60);
    return isRTL ? `${t('popup.timeAgo.prefix')} ${minutes} ${t('popup.timeAgo.minutes')}` : `${minutes}${t('popup.timeAgo.minutes')}`;
  } else if (diffInHours < 24) {
    const hours = Math.floor(diffInHours);
    return isRTL ? `${t('popup.timeAgo.prefix')} ${hours} ${t('popup.timeAgo.hours')}` : `${hours}${t('popup.timeAgo.hours')}`;
  } else {
    const days = Math.floor(diffInHours / 24);
    return isRTL ? `${t('popup.timeAgo.prefix')} ${days} ${t('popup.timeAgo.days')}` : `${days}${t('popup.timeAgo.days')}`;
  }
};

export function UnifiedNotificationPopup() {
  const { isRTL } = useLanguage();
  const t = useTranslations('notifications');

  // TODO: Replace with actual API call - using translations for static data now
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'assignment',
      title: t('popup.staticData.assignment.title'),
      message: t('popup.staticData.assignment.message'),
      timestamp: '2025-01-23T10:30:00',
      isRead: false,
      priority: 'high',
      actionUrl: '/assignments/math-3'
    },
    {
      id: '2',
      type: 'grade',
      title: t('popup.staticData.grade.title'),
      message: t('popup.staticData.grade.message'),
      timestamp: '2025-01-23T09:15:00',
      isRead: false,
      priority: 'medium',
      actionUrl: '/grades'
    },
    {
      id: '3',
      type: 'event',
      title: t('popup.staticData.event.title'),
      message: t('popup.staticData.event.message'),
      timestamp: '2025-01-23T08:00:00',
      isRead: true,
      priority: 'medium',
      actionUrl: '/schedule'
    },
    {
      id: '4',
      type: 'system',
      title: t('popup.staticData.system.title'),
      message: t('popup.staticData.system.message'),
      timestamp: '2025-01-22T16:45:00',
      isRead: true,
      priority: 'low'
    },
    {
      id: '5',
      type: 'reminder',
      title: t('popup.staticData.reminder.title'),
      message: t('popup.staticData.reminder.message'),
      timestamp: '2025-01-22T14:20:00',
      isRead: false,
      priority: 'medium',
      actionUrl: '/library'
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.isRead).length;

  // TODO: Implement API call to mark notification as read
  const markAsRead = (notificationId: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === notificationId
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  // TODO: Implement API call to mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  // TODO: Implement API call to dismiss notification
  const dismissNotification = (notificationId: string) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== notificationId)
    );
  };

  const getSubtitleText = () => {
    if (unreadCount === 0) {
      return t('popup.subtitle.allCaughtUp');
    } else if (unreadCount === 1) {
      return `${unreadCount} ${t('popup.subtitle.hasNew')}`;
    } else {
      return `${unreadCount} ${t('popup.subtitle.hasNewPlural')}`;
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 group"
          title={t('popup.title')}
        >
          <Bell className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          {unreadCount > 0 && (
            <Badge
              className={cn(
                'absolute h-5 w-5 p-0 text-xs bg-destructive hover:bg-destructive/90 rounded-full',
                'flex items-center justify-center font-medium animate-pulse shadow-lg',
                'border-2 border-background',
                isRTL ? '-top-1 -left-1' : '-top-1 -right-1'
              )}
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className={cn(
          'w-80 max-w-[calc(100vw-1rem)] bg-background/95 backdrop-blur-xl border border-border/40',
          'rounded-2xl shadow-2xl p-0 overflow-hidden',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1',
          'transform-gpu'
        )}
        align={isRTL ? 'start' : 'end'}
        sideOffset={12}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Header with enhanced gradient */}
        <div className="relative overflow-hidden border-b border-border/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/80 to-secondary/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse" />
          <div className="relative p-4">
            <div className={cn(
              'flex items-center justify-between',
              isRTL ? 'flex-row-reverse' : 'flex-row'
            )}>
              <div className={cn(
                'flex items-center gap-3',
                isRTL ? 'flex-row-reverse' : 'flex-row'
              )}>
                <div className="relative p-2.5 rounded-xl bg-primary/15 backdrop-blur-sm border border-primary/25 shadow-lg">
                  <Bell className="h-4 w-4 text-primary" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-transparent" />
                </div>
                <div>
                  <h3 className={cn(
                    'text-base font-semibold text-foreground font-primary',
                    isRTL ? 'text-right' : 'text-left'
                  )}>
                    {t('popup.title')}
                  </h3>
                  <p className={cn(
                    'text-xs text-muted-foreground mt-0.5 font-medium',
                    isRTL ? 'text-right' : 'text-left'
                  )}>
                    {getSubtitleText()}
                  </p>
                </div>
              </div>

              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={markAllAsRead}
                  className={cn(
                    'text-xs text-primary hover:bg-primary/15 rounded-lg h-7 px-3',
                    'font-medium transition-all duration-300 hover:scale-105 active:scale-95',
                    'shadow-sm hover:shadow-md'
                  )}
                >
                  {t('popup.markAllRead')}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Notifications List with smooth scrolling */}
        <div className="max-h-80 overflow-hidden">
          <div
            className="max-h-80 overflow-y-auto overflow-x-hidden scroll-smooth p-2 space-y-1"
            onWheel={(e) => {
              e.stopPropagation();
              const target = e.currentTarget;
              const { scrollTop, scrollHeight, clientHeight } = target;

              // Check if we're at the boundaries
              const atTop = scrollTop === 0;
              const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

              // Only allow scrolling within the container
              if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
                e.preventDefault();
              }
            }}
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0,0,0,0.3) rgba(0,0,0,0.1)'
            }}
          >
            {notifications.length === 0 ? (
              <div className="p-8 text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-muted/20 to-muted/40 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <CheckCircle className="w-8 h-8 text-muted-foreground/70" />
                </div>
                <p className="text-muted-foreground text-sm font-medium mb-1">
                  {t('popup.noNotifications')}
                </p>
                <p className="text-muted-foreground text-xs">
                  {t('popup.allCaughtUpMessage')}
                </p>
              </div>
            ) : (
              <div className="p-2 space-y-1 animate-fade-in">
                {notifications.map((notification, index) => {
                  const Icon = getNotificationIcon(notification.type);
                  const colors = getNotificationColors(notification.type);

                  return (
                    <div
                      key={notification.id}
                      className={cn(
                        'group relative p-3 mx-1 rounded-xl transition-all duration-300 cursor-pointer',
                        'hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transform-gpu',
                        'border backdrop-blur-sm scroll-mb-2',
                        !notification.isRead && [
                          colors.bg,
                          colors.border,
                          colors.shadow,
                          'shadow-md hover:shadow-lg'
                        ],
                        notification.isRead && [
                          'bg-muted/20 border-border/30 hover:bg-muted/40 hover:border-border/50',
                          'hover:shadow-md'
                        ],
                        'animate-slide-in-fade opacity-0'
                      )}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: 'forwards'
                      } as React.CSSProperties}
                      onClick={() => {
                        markAsRead(notification.id);
                        if (notification.actionUrl) {
                          console.log('Navigate to:', notification.actionUrl);
                        }
                      }}
                    >
                      {/* Enhanced unread indicator */}
                      {!notification.isRead && (
                        <div className={cn(
                          'absolute w-2.5 h-2.5 bg-primary rounded-full shadow-sm',
                          'animate-pulse-glow border border-primary/30',
                          isRTL ? 'left-2 bottom-3' : 'right-2 bottom-3'
                        )} />
                      )}

                      {/* Enhanced dismiss button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                          'absolute w-7 h-7 opacity-0 group-hover:opacity-100 transition-all duration-300',
                          'hover:bg-destructive/20 hover:text-destructive rounded-lg backdrop-blur-sm',
                          'shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95',
                          isRTL ? 'left-1 top-1' : 'right-1 top-1'
                        )}
                        onClick={(e) => {
                          e.stopPropagation();
                          dismissNotification(notification.id);
                        }}
                      >
                        <X className="w-3.5 h-3.5" />
                      </Button>

                      <div className={cn(
                        'flex gap-3',
                        isRTL ? 'flex-row-reverse' : 'flex-row'
                      )}>
                        {/* Enhanced Content */}
                        <div className="flex-1 min-w-0">
                          <div className={cn(
                            'flex items-start justify-between gap-2 mb-2',
                            isRTL ? 'flex-row-reverse' : 'flex-row'
                          )}>
                            <h4 className={cn(
                              'text-sm font-semibold text-foreground line-clamp-1 font-primary leading-tight',
                              'transition-colors duration-200 group-hover:text-primary',
                              isRTL ? 'text-right' : 'text-left'
                            )}>
                              {notification.title}
                            </h4>
                            <span className={cn(
                              'text-xs text-muted-foreground shrink-0 font-medium px-2 py-1',
                              'bg-muted/30 rounded-md backdrop-blur-sm',
                              isRTL ? 'text-left' : 'text-right'
                            )}>
                              {formatTimestamp(notification.timestamp, t, isRTL)}
                            </span>
                          </div>

                          <p className={cn(
                            'text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-3',
                            'transition-colors duration-200 group-hover:text-foreground/80',
                            isRTL ? 'text-right' : 'text-left'
                          )}>
                            {notification.message}
                          </p>

                          {/* Enhanced badges */}
                          <div className={cn(
                            'flex items-center gap-2 flex-wrap',
                            isRTL ? 'flex-row-reverse justify-end' : 'flex-row justify-start'
                          )}>
                            {notification.priority === 'high' && (
                              <Badge
                                variant="destructive"
                                className={cn(
                                  'text-xs py-1 px-2.5 h-6 rounded-lg font-medium shadow-sm',
                                  'animate-pulse-glow border border-destructive/30'
                                )}
                              >
                                {t('popup.priority.high')}
                              </Badge>
                            )}

                            <Badge
                              variant="outline"
                              className={cn(
                                'text-xs py-1 px-2.5 h-6 rounded-lg font-medium capitalize',
                                'backdrop-blur-sm shadow-sm transition-all duration-200',
                                'hover:shadow-md hover:scale-105',
                                colors.border,
                                colors.iconColor
                              )}
                            >
                              {t(`popup.types.${notification.type}`)}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Footer */}
        {notifications.length > 0 && (
          <div className="border-t border-border/20 p-3 bg-gradient-to-r from-muted/20 via-background/60 to-muted/20 backdrop-blur-sm">
            <Button
              variant="outline"
              className={cn(
                'w-full text-sm rounded-xl h-9 font-medium backdrop-blur-sm',
                'transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]',
                'hover:bg-primary/10 hover:border-primary/40 hover:text-primary',
                'shadow-sm hover:shadow-md'
              )}
              onClick={() => {
                setIsOpen(false);
                console.log('Navigate to full notifications page');
              }}
            >
              {t('popup.viewAll')}
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
