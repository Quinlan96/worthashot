import { Model } from 'objection'

import Category from './Category'
import QRCategory from './QRCategory'
import Suggestion from './Suggestion'

class Card extends Model {
	id: number
	code: string
	text: string
	notes?: string
	qr_enabled?: boolean
	qr_category_id?: string
	qr_data?: string
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
			},
			qrCategory: {
				relation: Model.BelongsToOneRelation,
				modelClass: QRCategory,
				join: {
					from: 'card_qr_categories.id',
					to: 'cards.qr_category_id'
				}
			},
			suggestions: {
				relation: Model.HasManyRelation,
				modelClass: Suggestion,
				join: {
					from: 'card_qr_suggestions.card_id',
					to: 'cards.id'
				}
			}
		}
	}
}

export default Card