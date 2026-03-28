import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint, Plus, X, Edit2, Camera, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useUserStore, type PetProfile } from "@/lib/stores/user-store";
import EmptyPets from "@/components/empty-states/EmptyPets";

const PetProfiles = () => {
  const { petProfiles, addPetProfile, updatePetProfile, deletePetProfile } = useUserStore();
  const [showAdd, setShowAdd] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", breed: "", age: "" });

  const handleAdd = () => {
    if (!form.name) return;
    addPetProfile({
      id: `pet-${Date.now()}`,
      name: form.name,
      breed: form.breed,
      age: form.age,
      photoUrl: null,
    });
    setForm({ name: "", breed: "", age: "" });
    setShowAdd(false);
  };

  const handleSaveEdit = (id: string) => {
    updatePetProfile(id, form);
    setEditingId(null);
    setForm({ name: "", breed: "", age: "" });
  };

  const startEdit = (pet: PetProfile) => {
    setEditingId(pet.id);
    setForm({ name: pet.name, breed: pet.breed, age: pet.age });
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          className="font-display text-3xl md:text-4xl text-foreground"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Pet Profiles
        </motion.h1>
        {petProfiles.length > 0 && (
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => {
                setShowAdd(true);
                setForm({ name: "", breed: "", age: "" });
              }}
              className="font-body bg-primary hover:bg-amber-700 text-primary-foreground"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add pet
            </Button>
          </motion.div>
        )}
      </div>

      {petProfiles.length === 0 && !showAdd ? (
        <EmptyPets onAddPet={() => setShowAdd(true)} />
      ) : (
        <div className="space-y-4">
          {/* Pet list */}
          <AnimatePresence>
            {petProfiles.map((pet) => (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20, height: 0 }}
                transition={{ duration: 0.25 }}
                layout
              >
                <Card className="border border-border">
                  <CardContent className="p-5">
                    {editingId === pet.id ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                          <Input
                            placeholder="Name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="font-body"
                          />
                          <Input
                            placeholder="Breed"
                            value={form.breed}
                            onChange={(e) => setForm({ ...form, breed: e.target.value })}
                            className="font-body"
                          />
                          <Input
                            placeholder="Age"
                            value={form.age}
                            onChange={(e) => setForm({ ...form, age: e.target.value })}
                            className="font-body"
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleSaveEdit(pet.id)}
                            className="font-body bg-primary hover:bg-amber-700 text-primary-foreground"
                          >
                            <Save className="w-3.5 h-3.5 mr-1.5" />
                            Save
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingId(null)}
                            className="font-body"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-14 h-14">
                            {pet.photoUrl ? (
                              <img src={pet.photoUrl} alt={pet.name} className="object-cover" />
                            ) : (
                              <AvatarFallback className="bg-amber-100 text-amber-700 font-display text-lg">
                                {pet.name[0]}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div>
                            <h3 className="font-display text-lg text-foreground">
                              {pet.name}
                            </h3>
                            <p className="font-body text-sm text-muted-foreground">
                              {[pet.breed, pet.age].filter(Boolean).join(" -- ") || "No details"}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-1.5">
                          <motion.button
                            onClick={() => startEdit(pet)}
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Edit2 className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            onClick={() => deletePetProfile(pet.id)}
                            className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Add form */}
          <AnimatePresence>
            {showAdd && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="border-2 border-dashed border-primary/30 bg-amber-50/50">
                  <CardContent className="p-5 space-y-4">
                    <h3 className="font-body text-sm font-semibold text-foreground">
                      Add a new pet
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Input
                        placeholder="Name (e.g. Luna)"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="font-body"
                        autoFocus
                      />
                      <Input
                        placeholder="Breed (e.g. Golden Retriever)"
                        value={form.breed}
                        onChange={(e) => setForm({ ...form, breed: e.target.value })}
                        className="font-body"
                      />
                      <Input
                        placeholder="Age (e.g. 3 years)"
                        value={form.age}
                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                        className="font-body"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={handleAdd}
                        disabled={!form.name}
                        className="font-body bg-primary hover:bg-amber-700 text-primary-foreground"
                      >
                        <Plus className="w-4 h-4 mr-1.5" />
                        Add pet
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowAdd(false)}
                        className="font-body"
                      >
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default PetProfiles;
