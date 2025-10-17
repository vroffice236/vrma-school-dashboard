
// data.ts
export const addresses = [
  {
    addressId: 1,
    adLine1: "123 Maple Street",
    adLine2: "Unit 4B",
    adCity: "Toronto",
    adProvince: "ON",
    adPostalCode: "M4B1B3",
  },
  {
    addressId: 2,
    adLine1: "456 Oak Avenue",
    adCity: "Mississauga",
    adProvince: "ON",
    adPostalCode: "L5M2N4",
  },
]

export const guardians = [
  {
    id: 1,
    firstName: "Sarah",
    middleName: null,
    lastName: "Johnson",
    email: "sarah.johnson@example.com",
    phone: "4161234567",
    addressId: 1,
  },
  {
    id: 2,
    firstName: "David",
    middleName: "R.",
    lastName: "Singh",
    email: "david.singh@example.com",
    phone: "6479876543",
    addressId: 2,
  },
  {
    id: 3,
    firstName: "Kelly",
    lastName: "Darci",
    email: "darci.kelly@example.com",
    phone: "156498203",
    addressId: 2,
  },
]

export const children = [
  {
    childID: 1,
    firstName: "Ethan",
    middleName: "A.",
    lastName: "Johnson",
    dob: "2018-03-14",
    placeOfBirth: "Toronto",
    OEN: 1001,
  },
  {
    childID: 2,
    firstName: "Maya",
    middleName: "R.",
    lastName: "Singh",
    dob: "2017-07-22",
    placeOfBirth: "Mississauga",
    OEN: 1002,
  },
]

export const childGuardians = [
  { childId: 1, guardianId: 1, relationship: "Mother" },
  { childId: 2, guardianId: 2, relationship: "Father" },
  { childId: 2, guardianId: 3, relationship: "Mother" },
]

export const grades = [
  { id: 1, grade: "Preschool", gradeLevel: 1 },
  { id: 2, grade: "Kindergarten", gradeLevel: 2 },
]

export const classrooms = [
  { id: 1, classroomName: "Room A" },
  { id: 2, classroomName: "Room B" },
]

export const enrollments = [
  {
    enrollmentId: 1,
    childId: 1,
    startDate: "2024-09-01",
    endDate: null,
    schoolYearId: 2024,
    gradeId: 1,
    classroomId: 1,
    status: "Active",
  },
  {
    enrollmentId: 2,
    childId: 2,
    startDate: "2024-09-01",
    endDate: null,
    schoolYearId: 2024,
    gradeId: 2,
    classroomId: 2,
    status: "Active",
  },
]

export const healthRecords = [
  {
    recordID: 1,
    childId: 1,
    allergyInfo: "Peanuts",
    dietRestriction: "Vegetarian",
    healthCardNo: "ON1234567890",
  },
  {
    recordID: 2,
    childId: 2,
    allergyInfo: "None",
    dietRestriction: "None",
    healthCardNo: "ON0987654321",
  },
]

// Example joined data helper (optional)
export const getChildFullData = (childId: number) => {
  const child = children.find(c => c.childID === childId)
  const enrollment = enrollments.find(e => e.childId === childId)
  const grade = grades.find(g => g.id === enrollment?.gradeId)
  const classroom = classrooms.find(c => c.id === enrollment?.classroomId)
  const guardianLinks = childGuardians.filter(cg => cg.childId === childId)
  const guardiansForChild = guardianLinks.map(link =>
    guardians.find(g => g.id === link.guardianId)
  )

  return {
    ...child,
    enrollment,
    grade,
    classroom,
    guardians: guardiansForChild,
  }
}

export const getAllChildrenFullData = () => {
  return children.map((child) => {
    const enrollment = enrollments.find(e => e.childId === child.childID)
    const grade = grades.find(g => g.id === enrollment?.gradeId)
    const classroom = classrooms.find(c => c.id === enrollment?.classroomId)
    const guardianLinks = childGuardians.filter(cg => cg.childId === child.childID)
    const guardiansForChild = guardianLinks.map(link =>
      guardians.find(g => g.id === link.guardianId)
    )

    return {
      ...child,
      enrollment,
      grade,
      classroom,
      guardians: guardiansForChild.filter(Boolean), // remove undefined values
    }
  })
}

export const getJoinedData = () => {
  return children.map((child) => {
    const enrollment = enrollments.find(e => e.childId === child.childID)
    const grade = grades.find(g => g.id === enrollment?.gradeId)
    const classroom = classrooms.find(c => c.id === enrollment?.classroomId)
    const health = healthRecords.find(h => h.childId === child.childID)

    const ageInYears = new Date().getFullYear() - new Date(child.dob).getFullYear();
    const ageInMonths = new Date().getMonth() - new Date(child.dob).getMonth();
    const age = ageInYears > 0 ? `${ageInYears} Years, ${ageInMonths} Months` : `${ageInMonths} Months`;
    const guardianLinks = childGuardians.filter(cg => cg.childId === child.childID)
    const guardiansForChild = guardianLinks.map(link =>
      guardians.find(g => g.id === link.guardianId)
    )

    const addressIds = guardiansForChild
      .map(g => g?.addressId)
      .filter(Boolean) as number[]

    const guardianAddresses = addressIds.map(aid =>
      addresses.find(a => a.addressId === aid)
    )

    return {
      childID: child.childID,
      fullName: `${child.firstName} ${child.middleName ?? ""} ${child.lastName}`.trim(),
      age: age,
      dob: child.dob,
      placeOfBirth: child.placeOfBirth,
      OEN: child.OEN,

      grade: grade?.grade ?? null,
      gradeLevel: grade?.gradeLevel ?? null,
      classroom: classroom?.classroomName ?? null,
      enrollmentStatus: enrollment?.status ?? null,
      schoolYearId: enrollment?.schoolYearId ?? null,

      guardians: guardiansForChild.filter(Boolean),
      guardianAddresses: guardianAddresses.filter(Boolean),
      healthRecord: health ?? null,
    }
  })
}
