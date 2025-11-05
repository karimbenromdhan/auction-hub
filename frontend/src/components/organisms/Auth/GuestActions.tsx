import { LoginButton, SignUpButton } from '../../molecules';

function GuestActions() {
  return (
    <div className="flex items-center space-x-3">
      <LoginButton />
      <SignUpButton />
    </div>
  );
}

export default GuestActions;
