import { Model } from 'objection'

import Category from './Category'

class Card extends Model {
	id?: number
	code?: string
	text?: string
	notes?: string
	qr_enabled: boolean
	created_at: string
	updated_at: string

	category_id?: number
	category: Partial<Category>

    static get tableName() {
        return 'cards'
	}

    $beforeInsert() {
        this.created_at = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString()
    }

	static get relationMappings() {
		return {
			category: {
				relation: Model.BelongsToOneRelation,
				modelClass: Category,
				join: {
					from: 'categories.id',
					to: 'cards.category_id'
				}
            }
		}
	}
}

export default Card