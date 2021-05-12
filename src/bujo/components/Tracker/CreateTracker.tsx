import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import ITracker from 'bujo/models/models';
// import { categories } from 'bujo/models/constants';
import { /*Ecategories,*/ Efluids, Emoods, Epains, Esanitories } from 'bujo/models/enums';
import './Tracker.scss';

function CreateTracker(): JSX.Element {
  const [currentTracker, setCurrentTracker] = useState<ITracker>();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data)
    setCurrentTracker(data)
  };

  const now = new Date();
  const test = now.toLocaleString().substr(0, 10).split('/');
  const nowDate = `${test[2]}-${test[1]}-${test[0]}`;

  return (
    <div className="CreateTracker">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="date" placeholder="Date" {...register("date")} defaultValue={nowDate} />

        <fieldset>
          <legend>Body</legend>
          <h3>Pains</h3>
          {Object.values(Epains).map(pain => (
            <input type="range" key={pain} placeholder={pain} {...register(`pains.${pain}` )} defaultValue="-1" min="-1" max="5" />
          ))}
          <h3>Fluids</h3>
          {Object.values(Efluids).map(fluid => (
            <input type="range" key={fluid} placeholder={fluid} {...register(`fluids.${fluid}`)} defaultValue="-1" min="-1" max="5" />
          ))}
        </fieldset>

        <fieldset>
          <legend>Mindset</legend>
          <h3>Moods</h3>
          {Object.values(Emoods).map(mood => (
            <input type="range" key={mood} placeholder={mood} {...register(`moods.${mood}`)} defaultValue="-1" min="-1" max="5" />
          ))}
        </fieldset>
        <fieldset>
          <legend>Material</legend>
          <h3>Sanitories</h3>
          {Object.values(Esanitories).map(sanitory => (
            <input type="range" key={sanitory} placeholder={sanitory} {...register(`sanitories.${sanitory}`)} defaultValue="-1" min="-1" max="5" />
          ))}
        </fieldset>
        <fieldset>
        <textarea placeholder="Notes" {...register("notes")} />
        </fieldset>

        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateTracker;
