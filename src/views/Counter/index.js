import { connect } from 'react-redux'
import { increment, doubleAsync } from 'store/counter/actions'

import Counter from 'components/Counter'

const mapDispatchToProps = {
  increment: () => increment(1),
  doubleAsync
}

const mapStateToProps = state => ({
  counter : state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
