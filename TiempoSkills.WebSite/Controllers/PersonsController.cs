using MongoDB.Bson;
using MongoRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using TiempoSkills.DTOS.Persons;
using TiempoSkills.DTOS.Skills;

namespace TiempoSkills.WebSite.Controllers
{
    public class PersonsController : BaseController<Person>
    {

        [HttpGet]
        public JsonResult GetPersons()
        {
            return Json(base.Repository.ToList(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetPerson(string id)
        {
            return Json(base.Repository.FirstOrDefault(item => item.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult SavePerson(Person person)
        {
            if (person.Id.ToString() == Guid.Empty.ToString())
            {
                person.Id = Guid.NewGuid().ToString();
                base.Repository.Add(person);
                return Json(person);
            }
            else
            {

                Person personToUpdate = base.Repository.FirstOrDefault(item => item.Id == person.Id);

                if (personToUpdate == null)
                {
                    base.Repository.Add(person);
                }
                else
                {
                    personToUpdate.Name = person.Name;
                    personToUpdate.Email = person.Email;
                    personToUpdate.LastName = person.LastName;
                    personToUpdate.PersonSkills = person.PersonSkills;
                    base.Repository.Update(personToUpdate);
                }

                return Json(personToUpdate);
            }
        }

    }
}
