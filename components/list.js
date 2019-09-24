import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: block;

  float: ${(props) => (props.horizontal ? 'left' : 'none')};
`;

function HorizontalList({ children }) {
  const items = children.map((child) => <Item key={child.props.id} horizontal>{child}</Item>);

  return (
    <List>
      { items }
    </List>
  );
}

HorizontalList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HorizontalList;
