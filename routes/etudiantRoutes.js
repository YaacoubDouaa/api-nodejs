// Importer Express et créer un routeur
const express = require('express');
const router = express.Router();

// Importer toutes les fonctions du contrôleur
const {
    getAllEtudiants,
    getEtudiantById,
    createEtudiant,
    updateEtudiant,
    deleteEtudiant,
    getEtudiantsByFiliere,
    searchEtudiants
} = require('../controllers/etudiantController');

// ============================================
// DÉFINITION DES ROUTES
// ============================================

// Route: /api/etudiants
// GET  → Liste tous les étudiants
// POST → Crée un nouvel étudiant
router.route('/')
    .get(getAllEtudiants)
    .post(createEtudiant);

// 🔎 Recherche par nom ou prénom
// GET /api/etudiants/search?q=ahmed
router.get('/search', searchEtudiants);

// Recherche par filière
router.get('/filiere/:filiere', getEtudiantsByFiliere);

// Route: /api/etudiants/:id
// GET    → Récupère un étudiant par ID
// PUT    → Modifie un étudiant
// DELETE → Supprime un étudiant
router.route('/:id')
    .get(getEtudiantById)
    .put(updateEtudiant)
    .delete(deleteEtudiant);

// Exporter le routeur
module.exports = router;
const express = require('express');
const router = express.Router();
const etudiantController = require('../controllers/etudiantController');

// ... vos routes existantes ...

// Route pour obtenir les étudiants triés par moyenne
router.get('/sorted', etudiantController.getEtudiantsSorted);

module.exports = router;