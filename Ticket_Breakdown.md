# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Ticket Breakdown

## Ticket #1: Add Custom ID Field to Agent Model

**Description:** Modify the Agent database model to include a 'custom_id' field for storing custom IDs created by facilities. 

**Implementation Details:** Update the Agents table schema to include this new field. Ensure it supports alphanumeric characters to accommodate various ID formats. Investigate potential performance impacts of this change and plan for necessary database optimizations.

**Acceptance Criteria:** Successfully add the 'custom_id' field to the Agents table without affecting existing data. Validate this through automated tests.

**Potential Risks:** Database schema changes could potentially impact existing functionality.

**Time Estimate:** 1 hours

---

## Ticket #2: Create API Endpoints to Set and Update Custom ID

**Description:** Develop secure API endpoints for facilities to set and update their custom IDs for agents.

**Implementation Details:** Create a POST endpoint for setting the custom ID and a PUT endpoint for updating it. Implement authorization checks to ensure only authorized users can access these endpoints. Validate input to prevent SQL Injection and other security threats.

**Acceptance Criteria:** Test and verify that facilities can set and update custom IDs using the new endpoints. Ensure errors are handled gracefully and informative messages are returned.

**Potential Risks:** Improper implementation could lead to security vulnerabilities.

**Time Estimate:** 3 hours

---

## Ticket #3: Update 'getShiftsByFacility' Function

**Description:** Revise the `getShiftsByFacility` function to return the `custom_id` with each agent's metadata.

**Implementation Details:** Alter the SQL query or ORM operation within the `getShiftsByFacility` function to retrieve the 'custom_id'. Consider potential performance implications of this change.

**Acceptance Criteria:** Validate that the `getShiftsByFacility` function now provides the `custom_id`. Check for the proper fallback to the internal `id` if no `custom_id` is present.

**Potential Risks:** Changes might impact the performance of the function.

**Time Estimate:** 2 hours

---

## Ticket #4: Update 'generateReport' Function

**Description:** Refactor the `generateReport` function to utilize the agent's `custom_id` over the internal `id` when available.

**Implementation Details:** Adjust the `generateReport` function to select the agent's `custom_id` from the list of shifts provided. Ensure fallback to internal `id` when `custom_id` is not present. 

**Acceptance Criteria:** Confirm that the generated reports now display the `custom_id` where available, and the internal `id` otherwise. Validate this through automated tests.

**Potential Risks:** The function changes might affect the report generation process.

**Time Estimate:** 2 hours

---

## Ticket #5: Validate and Test

**Description:** Thoroughly validate and test all new and updated functionalities.

**Implementation Details:** Design and implement test cases for all the new and updated features. Consider edge cases and potential points of failure. Check that new code adheres to the organization's coding standards.

**Acceptance Criteria:** Ensure that all new and modified functionalities pass the test cases. Verify that there's no regression in existing functionalities.

**Potential Risks:** Unforeseen bugs or issues might be introduced in the system.

**Time Estimate:** 3 hours
