import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import ITracker from 'bujo/models/models';
import { categories } from 'bujo/models/constants';
import { Ecategories, Efluids, Emoods, Epains, Esanitories } from 'bujo/models/enums';
import './Tracker.scss';

function CreateTracker() {
  const [currentTracker, setCurrentTracker] = useState<ITracker>();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => setCurrentTracker(data);
  return (
    <div className="CreateTracker">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="date" placeholder="Date" {...register("date")} />

        <h2>Body</h2>
        <h3>Pains</h3>
        {Object.values(Epains).map(pain => (
          <input type="number" defaultValue="-1" key={pain} placeholder={pain} {...register(`pains.${pain}`, { min: -1, max: 5 })}/>
        ))}

        <h3>Fluids</h3>
        {Object.values(Efluids).map(fluid => (
          <input type="number" defaultValue="-1" placeholder={fluid} {...register(`fluids.${fluid}`, { min: -1, max: 5 })}/>
        ))}

        <h2>Mindset</h2>
        <h3>Moods</h3>
        {Object.values(Emoods).map(mood => (
          <input type="number" defaultValue="-1" placeholder={mood} {...register(`moods.${mood}`, { min: -1, max: 5 })}/>
          ))}

        <h2>Material</h2>
        <h3>Sanitories</h3>
        {Object.values(Esanitories).map(sanitory => (
          <input type="number" defaultValue="-1" placeholder={sanitory} {...register(`sanitories.${sanitory}`, { min: -1, max: 5 })}/>
          ))}

        <input type="text" placeholder="Notes" {...register("notes")} />

        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateTracker;
