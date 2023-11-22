import Column from "./Column";
import Contacts from "./Contacts";
import classes from "./CV.module.css";
import EducationStage from "./EducationStage";
import EmploymentStage from "./EmploymentStage";
import InfoBlock from "./InfoBlock";
import List from "./List";
import Page from "./Page";
import Summary from "./Summary";
import VisitCard from "./VisitCard";

const CV = (props) => {
  const firstPageWorkExperience = props.data["work"] ? props.data["work"].slice(0, 3) : [];
  const secondPageWorkExperience = props.data["work"] ? props.data["work"].slice(3) : [];
  const educationList = props.data["education"] ? props.data["education"].map((education, idx) => (
    <EducationStage
      key={idx}
      school={education.school}
      degrees={education.degrees}
    />
  )) : [];
  const additionalEducationList = props.data["additional-education"] ? props.data["additional-education"].map(
    (education, idx) => (
      <EducationStage
        key={idx}
        school={education.school}
        degrees={education.degrees}
      />
    )
  ) : [];

  return (
    <div className={classes.cv}>
      <Page>
        <Column width="40%">
          <VisitCard photo={props.photo} data={props.data["visit-card"]} />
          <Contacts items={props.data["contacts"]} />
          <InfoBlock header="Profile">
            <Summary>{props.data.summary}</Summary>
          </InfoBlock>
          <InfoBlock header="Hard skills">
            <List items={props.data["hard-skills"]} />
          </InfoBlock>
          {/* <InfoBlock header="Soft skills">
            <List items={props.data["soft-skills"]} />
          </InfoBlock> */}
          <InfoBlock header="What brings joy">
            <List items={props.data["what-brings-joy"]} />
          </InfoBlock>
        </Column>
        <Column width="60%">
          <InfoBlock header="Work Experience">
            {firstPageWorkExperience.map((workExperience, idx) => (
              <EmploymentStage key={idx} data={workExperience} />
            ))}
          </InfoBlock>
        </Column>
      </Page>
      <Page>
        <Column>
          <InfoBlock>
            {secondPageWorkExperience.map((workExperience, idx) => (
              <EmploymentStage key={idx} data={workExperience} />
            ))}
          </InfoBlock>
          <InfoBlock header="Education">{educationList}</InfoBlock>
          <InfoBlock header="Additional Education">
            {additionalEducationList}
          </InfoBlock>
          {/* <InfoBlock header="Languages">
            <LanguageList items={props.data["languages"]} />
          </InfoBlock> */}
        </Column>
      </Page>
    </div>
  );
};

export default CV;
