import detailReducer from '../detailReducer'
import detailUiActionType from '../../detail-ui-reducer/detail-ui-actionTypes'
describe('DetailReducer',()=>{
    it('returns correct new object state',()=>{
        const object ={firstName:'',lastName:''}
        expect(detailReducer(undefined,{type: detailUiActionType.CREATE_OBJECT_CLICKED,payload:{object}})).toEqual(object)
    })
})