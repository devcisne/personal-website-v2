import { MoneyUtils } from '@personal-website/utils';

/**
 * DTO for item data sent to the frontend
 * Converts cents to dollars for UI display
 */
export class ItemDto {
    id!: string;
    title!: string;
    description?: string;
    creatorId!: string;
    price!: number; // In dollars (converted from cents)
    isActive!: boolean;
    createdAt!: Date;
    updatedAt!: Date;

    /**
     * Create DTO from entity data
     */
    static fromEntity(entity: {
        id: string;
        title: string;
        description?: string;
        creatorId: string;
        priceCents: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }): ItemDto {
        return {
            id: entity.id,
            title: entity.title,
            description: entity.description,
            creatorId: entity.creatorId,
            price: MoneyUtils.toDollars(entity.priceCents),
            isActive: entity.isActive,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
}
