
import { Divider, Steps } from 'antd';
import { useState } from 'react';
const Step = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.';
  return (
    <>
      <Divider />

      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        items={[
          {
            title: <span className="text-white-100 text-2xl">Step 1: Product design Research</span>,
            description: <span className="text-white-100/80 text-xl">{description}</span>,
          },
          {
            title: <span className='text-white-100 text-2xl'> Step 2: UI design in figma</span>,
            description: <span className="text-white-100/80 text-xl">{description}</span>,
          },
          {
            title: <span className='text-white-100 text-2xl'>Step 3: No-code develop in webflow</span>,
            description: <span className="text-white-100/80 text-xl">{description}</span>,
          },
        ]}
      />
    </>
  );
};
export default Step;