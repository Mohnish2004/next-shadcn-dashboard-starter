'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AreaGraph } from '@/components/charts/area-graph';
import { BarGraph } from '@/components/charts/bar-graph';
import { PieGraph } from '@/components/charts/pie-graph';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Overview } from '@/components/overview';
import { RecentSales } from '@/components/recent-sales';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { signOut, useSession } from 'next-auth/react';
import { CalendarIcon, FileIcon } from '@radix-ui/react-icons';
import {
  BookIcon,
  PhoneIcon,
  SendIcon,
  SunIcon,
  WebcamIcon
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
export default function page() {
  const { data: session } = useSession();
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, {session?.user?.name} 👋
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <Button>Apply for leave</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Weather</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2">
                      <SunIcon className="h-12 w-12" />
                      <div className="text-4xl font-bold">24°C</div>
                    </div>
                    <div className="text-lg font-medium">Sunny</div>
                    <div className="text-sm text-muted-foreground">
                      Dubai, United Arab emirates
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Public Holidays</CardTitle>
                  <CardDescription>Upcoming public holidays</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">New Year's Day</div>
                        <div className="text-sm text-muted-foreground">
                          January 1, 2024
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Independence Day</div>
                        <div className="text-sm text-muted-foreground">
                          July 4, 2024
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Thanksgiving</div>
                        <div className="text-sm text-muted-foreground">
                          November 28, 2024
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Leave Stats</CardTitle>
                  <CardDescription>Your leave balances</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Vacation</div>
                        <div className="text-sm text-muted-foreground">
                          10 days remaining
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Sick Leave</div>
                        <div className="text-sm text-muted-foreground">
                          5 days remaining
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Personal Leave</div>
                        <div className="text-sm text-muted-foreground">
                          3 days remaining
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-md bg-muted p-3 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <FileIcon className="h-6 w-6" />
                      <div>
                        <div className="font-medium">Company Policies</div>
                        <div className="text-sm text-muted-foreground">
                          Access our company policies
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-md bg-muted p-3 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <BookIcon className="h-6 w-6" />
                      <div>
                        <div className="font-medium">Employee Handbook</div>
                        <div className="text-sm text-muted-foreground">
                          Learn about our company
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-md bg-muted p-3 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <CalendarIcon className="h-6 w-6" />
                      <div>
                        <div className="font-medium">Holiday Calendar</div>
                        <div className="text-sm text-muted-foreground">
                          View upcoming holidays
                        </div>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Action Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-md bg-muted p-3 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <PhoneIcon className="h-6 w-6" />
                      <div>
                        <div className="font-medium">Call Help</div>
                        <div className="text-sm text-muted-foreground">
                          Get assistance
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-md bg-muted p-3 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <WebcamIcon className="h-6 w-6" />
                      <div>
                        <div className="font-medium">Talk with Chatbot</div>
                        <div className="text-sm text-muted-foreground">
                          Get answers quickly
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-md bg-muted p-3 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <CalendarIcon className="h-6 w-6" />
                      <div>
                        <div className="font-medium">Holiday History</div>
                        <div className="text-sm text-muted-foreground">
                          View past holidays
                        </div>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card> */}
            </div>
            {/* <Card>
              <CardHeader>
                <CardTitle>Apply for Leave</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="leave-title">Leave Title</Label>
                    <Input id="leave-title" placeholder="Enter leave title" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="leave-type">Leave Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select leave type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vacation">Vacation</SelectItem>
                        <SelectItem value="sick">Sick</SelectItem>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="family">Family</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="leave-dates">Leave Dates</Label>
                    <div className="flex gap-2">
                          <CalendarDateRangePicker />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reliever">Reliever</Label>
                    <Select >
                      <SelectTrigger>
                        <SelectValue placeholder="Select reliever" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="john">John Doe</SelectItem>
                        <SelectItem value="jane">Jane Smith</SelectItem>
                        <SelectItem value="bob">Bob Johnson</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="employee-code">Employee Code</Label>
                    <Input id="employee-code" type="number" placeholder="1234" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-number">Contact Number</Label>
                    <Input id="contact-number" type="tel" placeholder="(123) 456-7890" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="leave-reason">Leave Reason</Label>
                    <Textarea id="leave-reason" placeholder="Enter leave reason" className="min-h-[100px]" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="document-upload">Document Upload</Label>
                    <Input id="document-upload" type="file" />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Leave Request
                  </Button>
                </form>
              </CardContent>
            </Card> */}
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="col-span-4">
                <BarGraph />
              </div> */}
            {/* <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
              <div className="col-span-4">
                <AreaGraph />
              </div>
              <div className="col-span-4 md:col-span-3">
                <PieGraph />
              </div>
            </div> */}
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
