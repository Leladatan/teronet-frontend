import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

interface Props {
  pageSize: number;
  handlePageSizeChange: (page: string) => void;
}

const SelectLimit = ({ pageSize, handlePageSizeChange }: Props) => {
  return (
    <Select value={String(pageSize)} onValueChange={handlePageSizeChange}>
      <SelectTrigger className="w-36">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {[10, 20, 30, 40, 50, 60].map((size) => (
          <SelectItem key={size} value={String(size)}>
            {size} строк
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectLimit;
