import React from 'react'
import '../Education.css'
import yalenus from '../collegelogos/yale-nus-logo.png'
import yale from '../collegelogos/yale-university-logo.jpeg'
import ubc from '../collegelogos/UBC-logo-2.jpeg'
import ac from '../collegelogos/aitchison.png'
import sg from '../flags/sg.png'
import usa from '../flags/usa.png'
import canada from '../flags/canada.png'
import Pakistan from '../flags/Pakistan.png'


const imageMapping = {
    'yale-nus-college': yalenus,
    'yale-nus college': yalenus,
    'yale-university': yale,
    'ubc': ubc,
    'university of british columbia': ubc,
    'aitchison-college': ac,
    'aitchison college': ac,
  };
  
  const flagMapping = {
    'singapore': sg,
    'usa': usa,
    'canada': canada,
    'pakistan': Pakistan,
  };
  
  
function SchoolCard(props) {
  const lowerCaseSchoolName = props.school_name.toLowerCase();
  const lowerCaseCountry = props.country.toLowerCase();
  
  const collegeLogo = imageMapping.hasOwnProperty(lowerCaseSchoolName)
    ? imageMapping[lowerCaseSchoolName]
    : yalenus;
  
  const countryFlag = flagMapping.hasOwnProperty(lowerCaseCountry)
    ? flagMapping[lowerCaseCountry]
    : sg;
     return (
       <div className='educational-institution'>
            <div className='college-logo-container'> 
              <img src={collegeLogo} alt={props.school_name} className='college-logo'/>
            </div>
            <div className='college-text'>
                <div className='degree'>{props.degree}</div>
                <div className='activities-and-skills'>
                    <div className='activities'>Activities: {props.activities} </div>
                    <div className='skills'>Skills: {props.skills}</div>
                </div>
            </div>
            <div className='country-logo-container'>
              <div className='flag-container'>
                <img src={countryFlag} alt={props.country} className='country-logo'/>
              </div>
                <div className='duration'>{props.duration}</div>
                <div className='timetaken'>{props.timetaken}</div>
            </div>
        </div>
  )
}

export default SchoolCard
