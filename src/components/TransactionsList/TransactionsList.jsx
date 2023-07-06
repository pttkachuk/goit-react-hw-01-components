import PropTypes from 'prop-types';
import { TransitionTable, TransitionHead, TransitionTitle, TransitionInfo, TransitionRow } from './TransactionListStyle';
const TransactionList = ({ data }) => {
    return (
        <TransitionTable>
            <TransitionHead>
                <tr>
                    <TransitionTitle>Type</TransitionTitle>
                    <TransitionTitle>Amount</TransitionTitle>
                    <TransitionTitle>Currency</TransitionTitle>
                </tr>
            </TransitionHead>

            <tbody>
                {data.map(({ id, type, amount, currency }) => {
                    return (
                        <TransitionRow key={id} >
                        <TransitionInfo>{type}</TransitionInfo>
                        <TransitionInfo>{amount}</TransitionInfo>
                        <TransitionInfo>{currency}</TransitionInfo>
                    </TransitionRow>
                    )
                    
                })}
            </tbody>
        </TransitionTable>
    )
};

TransactionList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};

export default TransactionList;