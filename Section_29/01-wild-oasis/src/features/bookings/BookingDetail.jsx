import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from './useBooking';
import Spinner from '../../ui/Spinner';
import { useCheckout } from '../check-in-out/useCheckout';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteBooking } from './useDeleteBooking';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const { id, status } = booking;

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  if (isLoading) return <Spinner />;

  return (
    <Modal>
      <Row type='horizontal'>
        <HeadingGroup>
          <Heading as='h1'>Booking #{id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        <Modal.Open opens='delete'>
          <Button variation='danger'>Detele booking</Button>
        </Modal.Open>

        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${id}`)}>Check In</Button>
        )}
        {status === 'checked-in' && (
          <Button onClick={() => checkout(id)} disabled={isCheckingOut}>
            Check Out
          </Button>
        )}

        <Button variation='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
      <Modal.Window name='delete'>
        <ConfirmDelete
          resourceName='booking'
          onConfirm={() => {
            deleteBooking(id, { onSettled: navigate(-1) });
          }}
          disabled={isDeleting}
        />
      </Modal.Window>
    </Modal>
  );
}

export default BookingDetail;
