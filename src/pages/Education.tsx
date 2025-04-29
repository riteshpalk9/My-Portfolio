
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";

const Education = () => {
  const { theme } = useTheme();
  const isDark = theme !== 'light';

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <h1 className="page-title">
          Education
        </h1>
        <div className="space-y-8">
          <div className="content-tile">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h2 className={cn("text-2xl font-semibold flex items-center gap-2",
                isDark ? "text-white" : "text-gray-800"
              )}>
                <GraduationCap className="h-6 w-6 text-primary" />
                B.Tech in Mathematics and Computing
              </h2>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600">
                <span className={cn("flex items-center gap-1",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  <Calendar className="h-4 w-4" />
                  2021 - 2025
                </span>
                <span className={cn("flex items-center gap-1",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  <MapPin className="h-4 w-4" />
                  Delhi Technological University, New Delhi
                </span>
              </div>
            </div>
            <p className={cn("mb-4",
              isDark ? "text-gray-200" : "text-gray-600"
            )}>
              Studying advanced mathematics and computer science concepts, with a focus on:
            </p>
            <ul className={cn("list-disc list-inside mt-4 space-y-2 pl-2",
              isDark ? "text-gray-200" : "text-gray-600"
            )}>
              <li>Data Structures and Algorithms</li>
              <li>Object Oriented Programming</li>
              <li>Computer Networks</li>
              <li>Operating Systems</li>
              <li>Database Management Systems</li>
              <li>Mathematical Modeling</li>
            </ul>
          </div>
          
          <div className="content-tile">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h2 className={cn("text-2xl font-semibold flex items-center gap-2",
                isDark ? "text-white" : "text-gray-800"
              )}>
                <GraduationCap className="h-6 w-6 text-primary" />
                Class XII, CBSE (79%)
              </h2>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600">
                <span className={cn("flex items-center gap-1",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  <Calendar className="h-4 w-4" />
                  2019 - 2020
                </span>
                <span className={cn("flex items-center gap-1",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  <MapPin className="h-4 w-4" />
                  GBSSS No.2 School, Roop Nagar, Delhi
                </span>
              </div>
            </div>
          </div>
          
          <div className="content-tile">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h2 className={cn("text-2xl font-semibold flex items-center gap-2",
                isDark ? "text-white" : "text-gray-800"
              )}>
                <GraduationCap className="h-6 w-6 text-primary" />
                Class X, CBSE (81.2%)
              </h2>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600">
                <span className={cn("flex items-center gap-1",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  <Calendar className="h-4 w-4" />
                  2017 - 2018
                </span>
                <span className={cn("flex items-center gap-1",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  <MapPin className="h-4 w-4" />
                  Mount Olivet Sr. Sec. School, Delhi
                </span>
              </div>
            </div>
          </div>

          <div className="content-tile">
            <h2 className={cn("text-2xl font-semibold mb-4 flex items-center gap-2",
              isDark ? "text-white" : "text-gray-800"
            )}>
              <GraduationCap className="h-6 w-6 text-primary" />
              Achievements
            </h2>
            <ul className={cn("list-disc list-inside space-y-2 pl-2",
              isDark ? "text-gray-200" : "text-gray-600"
            )}>
              <li>Cleared JEE Main (Rank: 22015)</li>
              <li>Cleared UPSC NDA (Written)</li>
              <li>SSB Candidate - Indian Navy: Cleared all rounds of 6-day Services Selection Board assessment, Vizag</li>
              <li>Hackathon Finalist: Selected among top 1% of applicants in HCL Tech Hackathon Challenge</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
