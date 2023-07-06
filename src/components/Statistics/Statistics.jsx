import PropTypes from 'prop-types';
import { Statistic, StatsTitle, StatsList,StatsListItem, StatsLabel, StatsPercent } from './StatsStyle';
const Statistics = ({ title,stats}) => {
    return (
<Statistic>
    {title && <StatsTitle>{title}</StatsTitle>}

  <StatsList>
    {stats.map(({id, label, percentage})=>(
    <StatsListItem  key = {id}>
      <StatsLabel>{label}</StatsLabel>
      <StatsPercent>{percentage}%</StatsPercent>
    </StatsListItem>
    ))}
  </StatsList>
</Statistic>
    );
}

Statistics.propTypesropTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        }).isRequired,
    )
}

export default Statistics;