// Date and time utilities
export function formatDate(date: Date | string, locale: string = 'en'): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date

    if (locale === 'ar') {
        return dateObj.toLocaleDateString('ar-SA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

export function formatDateTime(date: Date | string, locale: string = 'en'): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date

    if (locale === 'ar') {
        return dateObj.toLocaleString('ar-SA')
    }

    return dateObj.toLocaleString('en-US')
}

export function getRelativeTime(date: Date | string, locale: string = 'en'): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    const now = new Date()
    const diff = now.getTime() - dateObj.getTime()

    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (locale === 'ar') {
        if (days > 0) return `منذ ${days} يوم`
        if (hours > 0) return `منذ ${hours} ساعة`
        if (minutes > 0) return `منذ ${minutes} دقيقة`
        return 'الآن'
    }

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    return 'now'
}
