import { Text, Button } from '@mantine/core';

export const AlertModal = ({ context, id, innerProps }) => (
  <>
    <Text size="sm">{innerProps.modalBody}</Text>
    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);
