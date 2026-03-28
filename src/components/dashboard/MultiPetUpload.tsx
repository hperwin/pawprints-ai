import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, X, Users } from "lucide-react";

interface PetPhoto {
  file: File;
  previewUrl: string;
  name: string;
}

interface MultiPetUploadProps {
  pets: PetPhoto[];
  onPetsChange: (pets: PetPhoto[]) => void;
  maxPets?: number;
}

const MultiPetUpload = ({ pets, onPetsChange, maxPets = 3 }: MultiPetUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const addPet = useCallback((file: File) => {
    if (pets.length >= maxPets) return;
    if (!file.type.startsWith("image/")) return;
    const previewUrl = URL.createObjectURL(file);
    const name = `Pet ${pets.length + 1}`;
    onPetsChange([...pets, { file, previewUrl, name }]);
  }, [pets, maxPets, onPetsChange]);

  const removePet = (index: number) => {
    URL.revokeObjectURL(pets[index].previewUrl);
    onPetsChange(pets.filter((_, i) => i !== index));
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) addPet(file);
  }, [addPet]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Users className="w-5 h-5 text-amber-700" />
        <h3 className="font-display text-lg text-foreground">Multiple Pets</h3>
        <Badge className="bg-amber-100 text-amber-800 border border-amber-200 font-body text-[10px]">
          Up to {maxPets}
        </Badge>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {pets.map((pet, idx) => (
          <div key={idx} className="relative group">
            <div className="aspect-square rounded-xl overflow-hidden border-2 border-amber-200">
              <img
                src={pet.previewUrl}
                alt={pet.name}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => removePet(idx)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="font-body text-xs text-center text-muted-foreground mt-1">
              {pet.name}
            </p>
          </div>
        ))}

        {pets.length < maxPets && (
          <div
            onDrop={handleDrop}
            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onClick={() => document.getElementById("multi-pet-input")?.click()}
            className={`aspect-square rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all ${
              isDragOver
                ? "border-primary bg-amber-50"
                : "border-border hover:border-primary/50"
            }`}
          >
            <input
              id="multi-pet-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) addPet(file);
                e.target.value = "";
              }}
            />
            <Upload className="w-6 h-6 text-muted-foreground mb-1" />
            <span className="font-body text-xs text-muted-foreground">Add pet</span>
          </div>
        )}
      </div>

      {pets.length > 1 && (
        <p className="font-body text-xs text-muted-foreground">
          All {pets.length} pets will appear together in one portrait.
        </p>
      )}
    </div>
  );
};

export type { PetPhoto };
export default MultiPetUpload;
