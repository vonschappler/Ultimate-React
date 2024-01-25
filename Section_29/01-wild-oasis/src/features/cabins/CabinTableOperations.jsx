import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';

const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'no-discount', label: 'No discount' },
  { value: 'with-discount', label: 'With discount' },
];

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField='discount' options={filterOptions} />
    </TableOperations>
  );
}

export default CabinTableOperations;
