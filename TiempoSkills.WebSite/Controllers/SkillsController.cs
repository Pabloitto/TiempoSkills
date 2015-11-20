using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TiempoSkills.DTOS.Skills;

namespace TiempoSkills.WebSite.Controllers
{
    public class SkillsController : BaseController<Skill>
    {

        [HttpGet]
        public JsonResult GetSkills()
        {
            //TODO: Change for real implementation
            IList<Skill> skills = new List<Skill>()
            {
                new Skill{Name = "C#" , Level = -1},
                new Skill{Name = "Java" , Level = -1},
                new Skill{Name = "Node JS" , Level = -1},
                new Skill{Name = "Angular JS" , Level = -1},
                new Skill{Name = "VB.NET" , Level = -1}
            };

            return Json(skills, JsonRequestBehavior.AllowGet);
        }

    }
}
