import { Model } from 'objection'

import Card from './Card'

class Suggestion extends Model {
    id: number
    card_id: number
    text?: string
    created_at: string
    updated_at: string

    static get tableName() {
        return 'card_qr_suggestions'
    }

    $beforeInsert() {
        this.created_at = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString()
    }

	static get relationMappings() {
		return {
			card: {
				relation: Model.BelongsToOneRelation,
				modelClass: Card,
				join: {
					from: 'cards.id',
					to: 'card_qr_suggestion.card_id'
				}
            }
		}
	}
}

export default Suggestion