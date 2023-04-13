/**
 * Model Profile
 *
 */
export type Profile = {
  id: string;
  username: string;
  email: string;
  phone: string | null;
  website: string | null;
  avatar: string | null;
  background: string | null;
  facebook: string | null;
  linkedin: string | null;
  twitter: string | null;
  xing: string | null;
  bio: string | null;
  skills: string[];
  interests: string[];
  academicTitle: string | null;
  createdAt: Date;
  firstName: string;
  lastName: string;
  publicFields: string[];
  termsAccepted: boolean;
  termsAcceptedAt: Date;
  updatedAt: Date;
  position: string | null;
  instagram: string | null;
  youtube: string | null;
  score: number;
};

/**
 * Model AreasOnProfiles
 *
 */
export type AreasOnProfiles = {
  profileId: string;
  areaId: string;
};

/**
 * Model SeekingsOnProfiles
 *
 */
export type SeekingsOnProfiles = {
  profileId: string;
  offerId: string;
};

/**
 * Model OffersOnProfiles
 *
 */
export type OffersOnProfiles = {
  profileId: string;
  offerId: string;
};

/**
 * Model Organization
 *
 */
export type Organization = {
  id: string;
  name: string;
  slug: string;
  email: string | null;
  phone: string | null;
  street: string | null;
  city: string | null;
  website: string | null;
  logo: string | null;
  background: string | null;
  facebook: string | null;
  linkedin: string | null;
  twitter: string | null;
  xing: string | null;
  bio: string | null;
  quote: string | null;
  createdAt: Date;
  publicFields: string[];
  quoteAuthor: string | null;
  quoteAuthorInformation: string | null;
  streetNumber: string | null;
  supportedBy: string[];
  updatedAt: Date;
  zipCode: string | null;
  instagram: string | null;
  youtube: string | null;
  score: number;
};

/**
 * Model OrganizationTypesOnOrganizations
 *
 */
export type OrganizationTypesOnOrganizations = {
  organizationId: string;
  organizationTypeId: string;
};

/**
 * Model FocusesOnOrganizations
 *
 */
export type FocusesOnOrganizations = {
  organizationId: string;
  focusId: string;
};

/**
 * Model MemberOfOrganization
 *
 */
export type MemberOfOrganization = {
  profileId: string;
  organizationId: string;
  isPrivileged: boolean;
  createdAt: Date;
};

/**
 * Model MemberOfNetwork
 *
 */
export type MemberOfNetwork = {
  networkId: string;
  networkMemberId: string;
  createdAt: Date;
};

/**
 * Model AreasOnOrganizations
 *
 */
export type AreasOnOrganizations = {
  organizationId: string;
  areaId: string;
};

/**
 * Model Event
 *
 */
export type Event = {
  id: string;
  name: string;
  slug: string;
  startTime: Date;
  endTime: Date;
  parentEventId: string | null;
  description: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  experienceLevelId: string | null;
  background: string | null;
  conferenceLink: string | null;
  conferenceCode: string | null;
  participantLimit: number | null;
  participationUntil: Date;
  venueName: string | null;
  venueStreet: string | null;
  venueStreetNumber: string | null;
  venueCity: string | null;
  venueZipCode: string | null;
  canceled: boolean;
  stageId: string | null;
  subline: string | null;
  participationFrom: Date;
};

/**
 * Model TeamMemberOfEvent
 *
 */
export type TeamMemberOfEvent = {
  eventId: string;
  profileId: string;
  isPrivileged: boolean;
  responsibileFor: string | null;
};

/**
 * Model ResponsibleOrganizationOfEvent
 *
 */
export type ResponsibleOrganizationOfEvent = {
  eventId: string;
  organizationId: string;
};

/**
 * Model DocumentOfEvent
 *
 */
export type DocumentOfEvent = {
  eventId: string;
  documentId: string;
};

/**
 * Model AreaOfEvent
 *
 */
export type AreaOfEvent = {
  eventId: string;
  areaId: string;
};

/**
 * Model WaitingParticipantOfEvent
 *
 */
export type WaitingParticipantOfEvent = {
  profileId: string;
  eventId: string;
  createdAt: Date;
};

/**
 * Model TagOfEvent
 *
 */
export type TagOfEvent = {
  tagId: string;
  eventId: string;
  createdAt: Date;
};

/**
 * Model TypeOfEvent
 *
 */
export type TypeOfEvent = {
  eventTypeId: string;
  eventId: string;
  createdAt: Date;
};

/**
 * Model FocusOfEvent
 *
 */
export type FocusOfEvent = {
  eventId: string;
  focusId: string;
};

/**
 * Model TargetGroupOfEvent
 *
 */
export type TargetGroupOfEvent = {
  targetGroupId: string;
  eventId: string;
  createdAt: Date;
};

/**
 * Model ParticipantOfEvent
 *
 */
export type ParticipantOfEvent = {
  profileId: string;
  eventId: string;
  createdAt: Date;
};

/**
 * Model SpeakerOfEvent
 *
 */
export type SpeakerOfEvent = {
  profileId: string;
  eventId: string;
  createdAt: Date;
};

/**
 * Model State
 *
 */
export type State = {
  agsPrefix: string;
  name: string;
};

/**
 * Model District
 *
 */
export type District = {
  ags: string;
  name: string;
  stateAgsPrefix: string;
  type: DistrictType;
};

/**
 * Model Area
 *
 */
export type Area = {
  id: string;
  name: string;
  type: AreaType;
  stateId: string | null;
};

/**
 * Model Offer
 *
 */
export type Offer = {
  id: string;
  title: string;
};

/**
 * Model OrganizationType
 *
 */
export type OrganizationType = {
  id: string;
  title: string;
};

/**
 * Model Focus
 *
 */
export type Focus = {
  id: string;
  title: string;
};

/**
 * Model TargetGroup
 *
 */
export type TargetGroup = {
  id: string;
  referenceId: number;
  slug: string;
  title: string;
};

/**
 * Model ExperienceLevel
 *
 */
export type ExperienceLevel = {
  id: string;
  title: string;
  referenceId: number;
  slug: string;
};

/**
 * Model EventType
 *
 */
export type EventType = {
  id: string;
  title: string;
  referenceId: number;
  slug: string;
};

/**
 * Model Tag
 *
 */
export type Tag = {
  id: string;
  slug: string;
  referenceId: number;
  title: string;
};

/**
 * Model Stage
 *
 */
export type Stage = {
  id: string;
  title: string;
  slug: string;
};

/**
 * Model Document
 *
 */
export type Document = {
  id: string;
  path: string;
  mimeType: string;
  title: string | null;
  description: string | null;
  createdAt: Date;
  filename: string;
  sizeInMB: number;
  updatedAt: Date;
  extension: string;
};

/**
 * Model Project
 *
 */
export type Project = {
  id: string;
  name: string;
  slug: string;
  logo: string | null;
  background: string | null;
  headline: string | null;
  excerpt: string | null;
  description: string | null;
  email: string | null;
  phone: string | null;
  website: string | null;
  street: string | null;
  streetNumber: string | null;
  zipCode: string | null;
  facebook: string | null;
  linkedin: string | null;
  twitter: string | null;
  youtube: string | null;
  instagram: string | null;
  xing: string | null;
  createdAt: Date;
  updatedAt: Date;
  city: string | null;
};

/**
 * Model Discipline
 *
 */
export type Discipline = {
  id: string;
  referenceId: number;
  title: string;
  slug: string;
};

/**
 * Model Award
 *
 */
export type Award = {
  id: string;
  title: string;
  slug: string;
  logo: string;
  subline: string;
  date: Date;
  shortTitle: string | null;
};

/**
 * Model TargetGroupOfProject
 *
 */
export type TargetGroupOfProject = {
  targetGroupId: string;
  projectId: string;
  createdAt: Date;
};

/**
 * Model DisciplineOfProject
 *
 */
export type DisciplineOfProject = {
  disciplineId: string;
  projectId: string;
  createdAt: Date;
};

/**
 * Model AwardOfProject
 *
 */
export type AwardOfProject = {
  awardId: string;
  projectId: string;
  createdAt: Date;
};

/**
 * Model ResponsibleOrganizationOfProject
 *
 */
export type ResponsibleOrganizationOfProject = {
  projectId: string;
  organizationId: string;
  createdAt: Date;
};

/**
 * Model TeamMemberOfProject
 *
 */
export type TeamMemberOfProject = {
  profileId: string;
  projectId: string;
  isPrivileged: boolean;
  createdAt: Date;
};

/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const AreaType: {
  country: "country";
  state: "state";
  district: "district";
};

export type AreaType = typeof AreaType[keyof typeof AreaType];

export const DistrictType: {
  land: "land";
  urban: "urban";
};

export type DistrictType = typeof DistrictType[keyof typeof DistrictType];
