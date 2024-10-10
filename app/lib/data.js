import { client } from "../../sanity/lib/client";
import {
  RESOURCES_QUERY,
  RESOURCE_QUERY,
  ACTIVITIES_QUERY,
  ACTIVITY_QUERY,
  TRAININGS_QUERY,
  TRAINING_QUERY,
  FETCH_LATEST_ACTIVITY,
} from "../../sanity/lib/queries";

const options = { next: { revalidate: 30 } };

export async function getResources() {
  try {
    const resources = await client.fetch(RESOURCES_QUERY, {}, options);
    return resources;
  } catch (err) {
    console.error(err);
  }
}

export async function getResource(slug) {
  try {
    const resource = await client.fetch(
      RESOURCE_QUERY,
      { slug: slug },
      options
    );
    return resource;
  } catch (err) {
    console.error(err);
  }
}

export async function getActivities() {
  try {
    const activities = await client.fetch(ACTIVITIES_QUERY, {}, options);
    return activities;
  } catch (error) {
    console.error(error);
  }
}

export async function getAcitvity(slug) {
  try {
    const activity = await client.fetch(
      ACTIVITY_QUERY,
      { slug: slug },
      options
    );
    return activity;
  } catch (error) {
    console.error(error);
  }
}

export async function getTrainings() {
  try {
    const trainings = await client.fetch(TRAININGS_QUERY, {}, options);
    return trainings;
  } catch (error) {
    console.error(error);
  }
}

export async function getTraining(slug) {
  try {
    const training = await client.fetch(
      TRAINING_QUERY,
      { slug: slug },
      options
    );
    return training;
  } catch (error) {
    console.error(error);
  }
}

export async function getLatestActivity() {
  try {
    const activity = await client.fetch(FETCH_LATEST_ACTIVITY, {}, options);
    return activity;
  } catch (error) {
    console.error(error);
  }
}
