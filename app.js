const STARTER_DRUGS = [
  {
    "category": "Airway / RSI",
    "name": "Etomidate",
    "adult": "20 mg IV",
    "peds": "0.3 mg/kg IV",
    "indication": "Induction, especially hemodynamically unstable patients"
  },
  {
    "category": "Airway / RSI",
    "name": "Ketamine",
    "adult": "100 mg IV",
    "peds": "1–2 mg/kg IV induction; 0.5–1 mg/kg IV analgesia",
    "indication": "Induction, procedural sedation, analgesia, severe asthma"
  },
  {
    "category": "Airway / RSI",
    "name": "Propofol",
    "adult": "100–150 mg IV",
    "peds": "1–2 mg/kg IV",
    "indication": "Induction or procedural sedation; avoid/adjust in shock"
  },
  {
    "category": "Airway / RSI",
    "name": "Succinylcholine",
    "adult": "100 mg IV",
    "peds": "1–2 mg/kg IV",
    "indication": "RSI paralysis"
  },
  {
    "category": "Airway / RSI",
    "name": "Rocuronium",
    "adult": "100 mg IV",
    "peds": "1–1.2 mg/kg IV",
    "indication": "RSI paralysis alternative"
  },
  {
    "category": "Cardiac / ACLS",
    "name": "Epinephrine — cardiac arrest",
    "adult": "1 mg IV/IO every 3–5 min",
    "peds": "0.01 mg/kg IV/IO every 3–5 min",
    "indication": "Cardiac arrest"
  },
  {
    "category": "Cardiac / ACLS",
    "name": "Amiodarone",
    "adult": "300 mg IV/IO bolus, then 150 mg",
    "peds": "5 mg/kg IV/IO",
    "indication": "VF/pulseless VT, stable VT"
  },
  {
    "category": "Cardiac / ACLS",
    "name": "Adenosine",
    "adult": "6 mg rapid IV, then 12 mg",
    "peds": "0.1 mg/kg, then 0.2 mg/kg; max 12 mg",
    "indication": "SVT"
  },
  {
    "category": "Cardiac / ACLS",
    "name": "Atropine",
    "adult": "1 mg IV every 3–5 min; max 3 mg",
    "peds": "0.02 mg/kg IV; minimum 0.1 mg",
    "indication": "Symptomatic bradycardia"
  },
  {
    "category": "Cardiac / ACLS",
    "name": "Magnesium sulfate",
    "adult": "2 g IV",
    "peds": "25–50 mg/kg IV; max 2 g",
    "indication": "Torsades, severe asthma adjunct"
  },
  {
    "category": "Cardiac / ACLS",
    "name": "Calcium gluconate 10%",
    "adult": "10 mL IV",
    "peds": "60–100 mg/kg IV",
    "indication": "Hyperkalemia with ECG changes, CCB toxicity"
  },
  {
    "category": "Respiratory",
    "name": "Salbutamol / Albuterol",
    "adult": "2.5–5 mg nebulized",
    "peds": "2.5 mg <20 kg; 5 mg ≥20 kg",
    "indication": "Asthma/COPD bronchospasm"
  },
  {
    "category": "Respiratory",
    "name": "Ipratropium",
    "adult": "0.5 mg nebulized",
    "peds": "0.25–0.5 mg nebulized",
    "indication": "Moderate–severe asthma/COPD adjunct"
  },
  {
    "category": "Respiratory",
    "name": "Hydrocortisone",
    "adult": "100 mg IV",
    "peds": "4 mg/kg IV; max 100 mg",
    "indication": "Asthma, adrenal crisis, anaphylaxis adjunct"
  },
  {
    "category": "Anaphylaxis",
    "name": "Epinephrine IM",
    "adult": "0.5 mg IM of 1 mg/mL",
    "peds": "0.01 mg/kg IM; max 0.5 mg",
    "indication": "First-line anaphylaxis treatment"
  },
  {
    "category": "Anaphylaxis",
    "name": "Chlorpheniramine",
    "adult": "10 mg IV/IM",
    "peds": "0.1 mg/kg IV/IM",
    "indication": "Urticaria/itching adjunct after epinephrine"
  },
  {
    "category": "Anaphylaxis",
    "name": "Hydrocortisone — anaphylaxis",
    "adult": "200 mg IV",
    "peds": "4 mg/kg IV",
    "indication": "Anaphylaxis adjunct, asthma component"
  },
  {
    "category": "Seizures / Neuro",
    "name": "Lorazepam",
    "adult": "4 mg IV",
    "peds": "0.1 mg/kg IV; max 4 mg",
    "indication": "Status epilepticus"
  },
  {
    "category": "Seizures / Neuro",
    "name": "Diazepam",
    "adult": "10 mg IV/PR",
    "peds": "0.2–0.3 mg/kg IV or 0.5 mg/kg PR",
    "indication": "Seizures"
  },
  {
    "category": "Seizures / Neuro",
    "name": "Levetiracetam",
    "adult": "1–2 g IV",
    "peds": "20–60 mg/kg IV",
    "indication": "Seizure control/loading"
  },
  {
    "category": "Toxicology / Metabolic",
    "name": "Naloxone",
    "adult": "0.4–2 mg IV/IM/IN titrated",
    "peds": "0.1 mg/kg; max 2 mg",
    "indication": "Opioid toxicity with respiratory depression"
  },
  {
    "category": "Toxicology / Metabolic",
    "name": "Dextrose",
    "adult": "25 g IV",
    "peds": "D10 5 mL/kg preferred",
    "indication": "Hypoglycemia"
  },
  {
    "category": "Toxicology / Metabolic",
    "name": "Regular insulin — hyperkalemia",
    "adult": "10 units IV + dextrose",
    "peds": "0.1 units/kg IV + glucose",
    "indication": "Hyperkalemia shifting therapy"
  },
  {
    "category": "Toxicology / Metabolic",
    "name": "Sodium bicarbonate",
    "adult": "50 mEq IV",
    "peds": "1–2 mEq/kg IV",
    "indication": "TCA overdose, severe acidosis, hyperkalemia adjunct"
  },
  {
    "category": "Analgesia / Sedation",
    "name": "Morphine",
    "adult": "2–5 mg IV titrated",
    "peds": "0.05–0.1 mg/kg IV",
    "indication": "Severe pain"
  },
  {
    "category": "Analgesia / Sedation",
    "name": "Fentanyl",
    "adult": "50–100 mcg IV/IN",
    "peds": "1–2 mcg/kg IV/IN",
    "indication": "Severe pain, procedural analgesia"
  },
  {
    "category": "Analgesia / Sedation",
    "name": "Paracetamol / Acetaminophen",
    "adult": "1 g PO/IV",
    "peds": "15 mg/kg PO/IV",
    "indication": "Pain/fever"
  },
  {
    "category": "Extrapyramidal",
    "name": "Procyclidine",
    "adult": "5–10 mg IV/IM",
    "peds": "0.04–0.1 mg/kg IV/IM; max 5 mg",
    "indication": "Acute dystonia/extrapyramidal symptoms"
  },
  {
    "category": "Extrapyramidal",
    "name": "Benztropine",
    "adult": "1–2 mg IV/IM",
    "peds": "0.02 mg/kg IV/IM; max 1 mg",
    "indication": "Acute dystonia/extrapyramidal symptoms"
  },
  {
    "category": "Shock / Sepsis",
    "name": "Norepinephrine / Noradrenaline",
    "adult": "Start 5–10 mcg/min infusion",
    "peds": "0.05–1 mcg/kg/min infusion",
    "indication": "Septic shock, vasodilatory shock"
  },
  {
    "category": "Shock / Sepsis",
    "name": "Normal saline",
    "adult": "1–2 L bolus",
    "peds": "20 mL/kg bolus",
    "indication": "Initial fluid resuscitation"
  },
  {
    "category": "Shock / Sepsis",
    "name": "Ceftriaxone",
    "adult": "2 g IV",
    "peds": "50–100 mg/kg IV",
    "indication": "Sepsis, meningitis depending on context"
  },
  {
    "category": "GI / Misc",
    "name": "Ondansetron",
    "adult": "4–8 mg IV/PO",
    "peds": "0.15 mg/kg; max 4 mg",
    "indication": "Vomiting"
  },
  {
    "category": "GI / Misc",
    "name": "Metoclopramide",
    "adult": "10 mg IV/IM/PO",
    "peds": "0.1–0.15 mg/kg",
    "indication": "Nausea, migraine adjunct"
  },
  {
    "category": "GI / Misc",
    "name": "Pantoprazole",
    "adult": "40–80 mg IV",
    "peds": "1 mg/kg IV",
    "indication": "Upper GI bleed, severe gastritis/ulcer concern"
  }
];

// 1. Paste your Firebase Configuration here
const firebaseConfig = {
  apiKey: "AIzaSyA-clqoD7YiAxQbI1WRg4A5hhRup4YuyrE",
  authDomain: "ed-drugs.firebaseapp.com",
  projectId: "ed-drugs",
  storageBucket: "ed-drugs.firebasestorage.app",
  messagingSenderId: "101110196513",
  appId: "1:101110196513:web:40559131c06e8254093660"
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const drugsCollection = db.collection("drugs");

// Local cache array to keep track of items loaded from Firestore
let drugs = [];
let editIndex = null;

const el = id => document.getElementById(id);

// 3. Fetch Data in Real-Time from Firestore
function initRealtimeUpdates() {
  drugsCollection.onSnapshot((snapshot) => {
    drugs = [];
    snapshot.forEach((doc) => {
      // We append the unique Firestore document ID to each drug object
      drugs.push({ id: doc.id, ...doc.data() });
    });
    render();
  }, (error) => {
    console.error("Error reading from Firestore: ", error);
  });
}

function categories() {
  return [...new Set(drugs.map(d => d.category).filter(Boolean))].sort();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[s]));
}

function populateCategories() {
  const currentFilter = el("categoryFilter").value || "All";
  const cats = categories();
  el("categoryFilter").innerHTML = '<option value="All">All categories</option>' + cats.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  el("categoryFilter").value = cats.includes(currentFilter) ? currentFilter : "All";
  el("category").innerHTML = cats.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("") + '<option value="Other">Other</option>';
}

function render() {
  populateCategories();

  const q = el("search").value.toLowerCase().trim();
  const cat = el("categoryFilter").value;
  const list = el("drugList");

  const filtered = drugs.filter(d => {
    const text = `${d.name} ${d.adult} ${d.peds} ${d.indication} ${d.category}`.toLowerCase();
    return (!q || text.includes(q)) && (cat === "All" || d.category === cat);
  });

  if (!filtered.length) {
    list.innerHTML = `<div class="panel">No drugs found.</div>`;
    return;
  }

  list.innerHTML = filtered.map(d => {
    const i = drugs.indexOf(d);
    return `
      <article class="drug">
        <div class="drugTop">
          <h3>${escapeHtml(d.name)}</h3>
          <div class="category">${escapeHtml(d.category)}</div>
        </div>
        <div class="line"><b>Dose:</b> ${escapeHtml(d.adult)} <span>(${escapeHtml(d.peds)})</span></div>
        <div class="line"><b>Indication:</b> ${escapeHtml(d.indication)}</div>
        <div class="drugActions">
          <button onclick="editDrug(${i})">Edit</button>
          <button class="danger" onclick="deleteDrug(${i})">Delete</button>
        </div>
      </article>
    `;
  }).join("");
}

function openForm(index = null) {
  editIndex = index;
  el("formPanel").classList.remove("hidden");
  el("formTitle").textContent = index === null ? "Add drug" : "Edit drug";

  if (index === null) {
    el("name").value = "";
    el("adult").value = "";
    el("peds").value = "";
    el("indication").value = "";
    el("category").value = categories()[0] || "Other";
  } else {
    const d = drugs[index];
    el("name").value = d.name;
    el("adult").value = d.adult;
    el("peds").value = d.peds;
    el("indication").value = d.indication;
    el("category").value = d.category;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeForm() {
  editIndex = null;
  el("formPanel").classList.add("hidden");
}

async function saveDrug() {
  const drugData = {
    category: el("category").value || "Other",
    name: el("name").value.trim(),
    adult: el("adult").value.trim(),
    peds: el("peds").value.trim(),
    indication: el("indication").value.trim()
  };

  if (!drugData.name || !drugData.adult || !drugData.peds || !drugData.indication) {
    alert("Fill all fields.");
    return;
  }

  try {
    if (editIndex === null) {
      // Create new document in cloud
      await drugsCollection.add(drugData);
    } else {
      // Update existing document using its cloud ID
      const drugId = drugs[editIndex].id;
      await drugsCollection.doc(drugId).set(drugData);
    }
    closeForm();
  } catch (error) {
    console.error("Error saving document: ", error);
    alert("Error saving data to the cloud.");
  }
}

function editDrug(i) {
  openForm(i);
}

async function deleteDrug(i) {
  if (!confirm("Delete this drug?")) return;
  
  try {
    const drugId = drugs[i].id;
    await drugsCollection.doc(drugId).delete();
  } catch (error) {
    console.error("Error deleting document: ", error);
    alert("Error deleting data from cloud.");
  }
}

function exportBackup() {
  // Clean up IDs out of backups so they can be clean entry arrays
  const cleanBackup = drugs.map(({id, ...rest}) => rest);
  const blob = new Blob([JSON.stringify(cleanBackup, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "ed-drugs-backup.json";
  a.click();
}

function importBackup(file) {
  const reader = new FileReader();
  reader.onload = async () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported)) throw new Error("Invalid file");
      
      if(confirm(`This will append ${imported.length} items to your online database. Proceed?`)) {
        const batch = db.batch();
        imported.forEach(item => {
          const docRef = drugsCollection.doc(); // assign random ID
          batch.set(docRef, item);
        });
        await batch.commit();
        alert("Backup batch successfully pushed to cloud database!");
      }
    } catch (e) {
      alert("Invalid backup file or cloud database error.");
    }
  };
  reader.readAsText(file);
}

// 4. Initializing Seed Data if cloud database is empty
async function checkAndSeedDatabase() {
  const snapshot = await drugsCollection.limit(1).get();
  if (snapshot.empty) {
    // If you have starter records defined previously
    if (typeof STARTER_DRUGS !== 'undefined' && STARTER_DRUGS.length > 0) {
      const batch = db.batch();
      STARTER_DRUGS.forEach((drug) => {
        const docRef = drugsCollection.doc();
        batch.set(docRef, drug);
      });
      await batch.commit();
    }
  }
}

// Event Listeners
el("search").addEventListener("input", render);
el("categoryFilter").addEventListener("change", render);
el("addNewBtn").addEventListener("click", () => openForm());
el("saveBtn").addEventListener("click", saveDrug);
el("cancelBtn").addEventListener("click", closeForm);
el("exportBtn").addEventListener("click", exportBackup);
el("importFile").addEventListener("change", e => e.target.files[0] && importBackup(e.target.files[0]));

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

// Kickstart database evaluation and connection listener
checkAndSeedDatabase().then(() => {
  initRealtimeUpdates();
});
  navigator.serviceWorker.register("service-worker.js");
}

render();
