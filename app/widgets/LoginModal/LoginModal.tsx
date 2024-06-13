export default function LoginModal({ setShowModal }: { setShowModal: (value: boolean) => void }) {
  const handleCloseModal = () => setShowModal(false);

  return <div onClick={handleCloseModal}>Modal</div>;
}
