/**
 * Money utilities for handling currency amounts in cents
 * This prevents floating-point precision issues and ensures accurate calculations
 */
export class MoneyUtils {
    /**
     * Convert dollars to cents
     * @param dollars - Amount in dollars (e.g., 75.50)
     * @returns Amount in cents (e.g., 7550)
     */
    static toCents(dollars: number): number {
        if (dollars < 0) {
            throw new Error('Amount cannot be negative');
        }
        return Math.round(dollars * 100);
    }

    /**
     * Convert cents to dollars
     * @param cents - Amount in cents (e.g., 7550)
     * @returns Amount in dollars (e.g., 75.50)
     */
    static toDollars(cents: number): number {
        return cents / 100;
    }

    /**
     * Format cents as currency string
     * @param cents - Amount in cents
     * @returns Formatted currency string (e.g., "$75.50")
     */
    static formatCurrency(cents: number): string {
        const dollars = this.toDollars(cents);
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(dollars);
    }

    /**
     * Validate that cents amount is valid
     * @param cents - Amount in cents
     * @returns true if valid
     */
    static isValidAmount(cents: number): boolean {
        return Number.isInteger(cents) && cents >= 0;
    }

    /**
     * Calculate percentage of an amount
     * @param cents - Base amount in cents
     * @param percentage - Percentage (e.g., 10 for 10%)
     * @returns Amount in cents
     */
    static calculatePercentage(cents: number, percentage: number): number {
        return Math.round((cents * percentage) / 100);
    }
}
