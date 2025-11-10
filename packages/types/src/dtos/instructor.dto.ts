import { MoneyUtils } from '@personal-website/utils';

/**
 * DTO for instructor data sent to the frontend
 * Converts cents to dollars for UI display
 */
export class InstructorDto {
    id!: string;
    email!: string;
    name!: string;
    role!: 'instructor';
    bio?: string;
    qualifications?: string;
    hourlyRate!: number; // In dollars (converted from cents)

    /**
     * Create DTO from entity data
     */
    static fromEntity(entity: {
        id: string;
        email: string;
        name: string;
        role: string;
        bio?: string;
        qualifications?: string;
        hourlyRateCents?: number;
    }): InstructorDto {
        return {
            id: entity.id,
            email: entity.email,
            name: entity.name,
            role: 'instructor',
            bio: entity.bio,
            qualifications: entity.qualifications,
            hourlyRate: entity.hourlyRateCents
                ? MoneyUtils.toDollars(entity.hourlyRateCents)
                : 0,
        };
    }
}
