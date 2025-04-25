import { User } from "@/entities/users/types";

import { Button } from "@/shared/components/ui/button";
import { LogOut } from "lucide-react";

interface Props {
  user: User;
  handleLogout: () => void;
}

const ProfileButtons = ({ user, handleLogout }: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
      <span className="text-sm font-medium">
        {user.firstName} {user.lastName}
      </span>
      <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center gap-2">
        <LogOut className="h-4 w-4" />
        Выйти
      </Button>
    </div>
  );
};

export default ProfileButtons;
