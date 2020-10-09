import { Model } from 'objection'

class QRCategory extends Model {
    id: number
    name?: string
    code?: string
    created_at: string
    updated_at: string

    static get tableName() {
        return 'card_qr_categories'
    }

    $beforeInsert() {
        this.created_at = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString()
    }

    static get relationMappings() {
        return {
        }
    }
}

export default QRCategory