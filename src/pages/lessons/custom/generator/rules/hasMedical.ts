const MEDICAL_PHRASES = [
  "methicillin resistant staphylococcus aureus",
  "antiepileptic hypersensitivity syndrome",
  "biologically active intermediary",
  "superficial punctate keratitis",
  "benign prostatic hyperplasia",
  "peripheral arterial disease",
  "meibomian gland dysfunction",
  "proximal convoluted tubule",
  "peripheral nervous system",
  "primary convoluted tubule",
  "medullary collecting duct",
  "acute coronary syndromes",
  "ventricular fibrillation",
  "community acquired MRSA",
  "central venous pressure",
  "urinary tract infection",
  "suprachiasmatic nucleus",
  "mean arterial pressure",
  "sarcoplasmic reticulum",
  "chronic heart failure",
  "cystoid macular edema",
  "premenstrual syndrome",
  "endoplasmic reticulum",
  "hematoxylin and eosin",
  "staphylococcus aureus",
  "creatinine clearance",
  "peptic ulcer disease",
  "macular degeneration",
  "metered dose inhaler",
  "bacterial meningitis",
  "rheumatoid arthritis",
  "atrial fibrillation",
  "upper motor neurons",
  "lower motor neurons",
  "cerebrospinal fluid",
  "reticular formation",
  "sickle cell disease",
  "spectral domain OCT",
  "inferior vena cava",
  "upper motor neuron",
  "lower motor neuron",
  "connective tissues",
  "multiple sclerosis",
  "ejection fraction",
  "internal carotid",
  "cochlear implant",
  "anxiety disorder",
  "corneal ectasia",
  "plasma membrane",
  "peak flow meter",
  "cardinal veins",
  "red blood cell",
  "ACE inhibitor",
  "carpal tunnel",
];

const MEDICAL_WORDS = [
  "pharmacotherapeutics",
  "dihydrotestosterone",
  "immunosuppressive",
  "electrocardiogram",
  "pharmacokinetics",
  "pharmacogenomics",
  "pharmacoeconomic",
  "pharmacodynamics",
  "immunodeficiency",
  "hypersensitivity",
  "transplantation",
  "pharmacodynamic",
  "neuroadaptation",
  "immunopathology",
  "glucuronidation",
  "gluconeogenesis",
  "aminoglycosides",
  "osteoarthritis",
  "inflammatories",
  "hyperlipidemia",
  "glucocorticoid",
  "dacryocystitis",
  "conjunctivitis",
  "triglycerides",
  "prostaglandin",
  "hyperglycemic",
  "hyperglycemia",
  "tuberculosis",
  "triglyceride",
  "neurological",
  "lipoproteins",
  "hypoglycemic",
  "hypoglycemia",
  "hypertensive",
  "hypertension",
  "hemophiliacs",
  "glycoprotein",
  "diencephalon",
  "ventricular",
  "blepharitis",
  "pediculosis",
  "ophthalmics",
  "microtubule",
  "mediastinum",
  "mediastinal",
  "ganglionics",
  "nociceptors",
  "nucleotides",
  "glomerulosa",
  "geriatrics",
  "nociceptor",
  "organelles",
  "bacterials",
  "iatrogenic",
  "hepatocyte",
  "auscultate",
  "metastatic",
  "meningitis",
  "microbials",
  "gingivitis",
  "pneumonia",
  "maxillary",
  "tricyclic",
  "diabetics",
  "gefitinib",
  "glaucomas",
  "occlusion",
];

const hasMedical = (_outline: string, translation: string) =>
  MEDICAL_WORDS.includes(translation) || MEDICAL_PHRASES.includes(translation);

export default hasMedical;
