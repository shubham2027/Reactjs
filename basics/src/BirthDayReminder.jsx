
//using inline css here

function BirthDayReminder(props) {
  return (
    <>
      <div style={{border: '3px solid black', borderRadius: '10px', backgroundColor: 'lightgreen' , padding: '10px', margin: '10px'}}>
        <h2 style={{color: 'indigo', fontSize: '24px'}}>
            {props.date == 3 ?  'happy birthday 🎂' : 'your birthday is coming'}
        </h2>
      </div>
    </>
  );
}

export default BirthDayReminder;