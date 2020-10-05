import { Model } from 'objection'

import Card from './Card'

class Category extends Model {
	id?: number
	name: string
	created_at: string
	updated_at: string

    static get tableName() {
        return 'categories'
	}

    $beforeInsert() {
        this.created_at = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString()
    }

	static get relationMappings() {
		return {
			cards: {
				relation: Model.HasManyRelation,
				modelClass: Card,
				join: {
					from: 'cards.category_id',
					to: 'categories.id'
				}
            }
		}
	}
}

export default Category