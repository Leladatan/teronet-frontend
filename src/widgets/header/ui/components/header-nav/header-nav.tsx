import { User } from "@/entities/users/types";

import ProfileButtons from "@/widgets/header/ui/components/header-nav/components/profile-buttons";
import AuthButtons from "@/widgets/header/ui/components/header-nav/components/auth-buttons";

interface Props {
  user: User | null;
  handleLogout: () => void;
}

const HeaderNav = ({ user, handleLogout }: Props) => {
  return <>{user ? <ProfileButtons user={user} handleLogout={handleLogout} /> : <AuthButtons />}</>;
};

export default HeaderNav;
